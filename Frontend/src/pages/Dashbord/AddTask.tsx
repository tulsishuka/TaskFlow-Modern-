/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";
import { X, AlertCircle, ChevronDown } from "lucide-react";

interface Column {
  _id: string;
  name: string;
}

interface AddTaskProps {
  isOpen: boolean;
  onClose: () => void;
  columns: Column[];
  onTaskCreated: () => void;
}

const AddTask = ({
  isOpen,
  onClose,
  columns,
  onTaskCreated,
}: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [columnId, setColumnId] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (columns.length > 0) {
      setColumnId(columns[0]._id);
    }
  }, [columns]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    if (!columnId) {
      setError("Please select a column.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3000/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim(),
            priority,
            columnId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to create task"
        );
      }
      onTaskCreated();
      setTitle("");
      setDescription("");
      setPriority("Medium");

      if (columns.length > 0) {
        setColumnId(columns[0]._id);
      } else {
        setColumnId("");
      }
      onClose();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (loading) return;

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setError("");

    if (columns.length > 0) {
      setColumnId(columns[0]._id);
    } else {
      setColumnId("");
    }

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md bg-[#111115] border border-zinc-800/90 rounded-2xl p-6 shadow-2xl text-white font-sans space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">
            Create new task
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-zinc-800/60 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        {error && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-3 py-2.5 rounded-xl text-xs">
            <AlertCircle size={14} />
            <span>{error}</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-zinc-300">
              Title <span className="text-red-400">*</span>
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);

                if (e.target.value.trim()) {
                  setError("");
                }
              }}
              placeholder="e.g. Update user dashboard"
              className={`w-full bg-[#17171c] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                error
                  ? "border-red-500/80"
                  : "border-zinc-800 focus:border-purple-500"
              }`}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-zinc-300">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Add details about this task..."
              className="w-full bg-[#17171c] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 resize-none transition-all"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-300">
                Priority
              </label>

              <div className="bg-[#17171c] border border-zinc-800 rounded-xl p-1 flex items-center justify-between">
                {["Low", "Medium", "High"].map(
                  (item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => {
                        setPriority(item);
                        setError("");
                      }}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                        priority === item
                          ? "border border-cyan-500/80 bg-cyan-950/30 text-cyan-400"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-300">
                Column
              </label>

              <div className="relative">
                <select
                  value={columnId}
                  onChange={(e) => {
                    setColumnId(e.target.value);
                    setError("");
                  }}
                  disabled={columns.length === 0}
                  className="w-full appearance-none bg-[#17171c] border border-zinc-800 rounded-xl px-4 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-purple-500 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {columns.length === 0 ? (
                    <option value="">
                      No columns available
                    </option>
                  ) : (
                    columns.map((column) => (
                      <option
                        key={column._id}
                        value={column._id}
                      >
                        {column.name}
                      </option>
                    ))
                  )}
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 pt-3">

            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="text-zinc-400 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading || columns.length === 0}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-95 disabled:opacity-50 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all"
            >
              {loading ? "Creating..." : "Create Task"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;