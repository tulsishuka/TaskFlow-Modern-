
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Sparkles,
  ChevronDown,
  Trash2,
  Save,
  ArrowLeft,
} from "lucide-react";

const API_URL = "https://taskflow-modern.onrender.com/api";

type Priority = "Low" | "Medium" | "High";

interface Task {
  _id: string;
  title: string;
  description?: string;
  priority: Priority;
  columnId:
    | string
    | {
        _id: string;
        name: string;
      };
  createdAt: string;
  updatedAt: string;
}

const EditTask = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [status, setStatus] = useState("To Do");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) {
        setError("Task ID is missing");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/tasks/${id}`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch task"
          );
        }

        const task: Task = data.task;

        setTaskTitle(task.title);
        setDescription(task.description || "");
        setPriority(task.priority);
        if (
          typeof task.columnId === "object" &&
          task.columnId !== null
        ) {
          setStatus(task.columnId.name);
        }
      } catch (error) {
        console.error(error);

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load task"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleSave = async () => {
    if (!id) {
      setError("Task ID is missing");
      return;
    }

    if (!taskTitle.trim()) {
      setError("Task title cannot be empty");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const response = await fetch(
        `${API_URL}/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: taskTitle,
            description,
            priority,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update task"
        );
      }

      alert("Task updated successfully");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to update task"
      );
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async () => {
    if (!id) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    try {
      setDeleting(true);
      setError("");

      const response = await fetch(
        `${API_URL}/tasks/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete task"
        );
      }

      alert("Task deleted successfully");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to delete task"
      );
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <p className="text-zinc-400">
          Loading task...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-sans text-gray-200">

      <div className="w-full max-w-2xl bg-[#121215] border border-zinc-800 rounded-xl p-8 shadow-2xl space-y-6">
        <div className="flex justify-between items-start">

          <div>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white mb-4 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Board
            </button>

            <h1 className="text-2xl font-bold text-white tracking-tight">
              Edit Task
            </h1>

            <p className="text-sm text-zinc-400 mt-1">
              Update your task details.
            </p>
          </div>

          <span className="text-xs font-mono text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-800">
            #{id?.slice(-6)}
          </span>

        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

 
        <div className="space-y-2">

          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Task Title
          </label>

          <input
            type="text"
            value={taskTitle}
            onChange={(e) =>
              setTaskTitle(e.target.value)
            }
            className="w-full bg-[#09090b] border border-zinc-800/80 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition"
          />

        </div>

        <div className="space-y-2">

          <div className="flex justify-between items-center">

            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Description
            </label>

            <button
              type="button"
              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Optimize
            </button>

          </div>

          <textarea
            rows={4}
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full bg-[#09090b] border border-zinc-800/80 rounded-lg p-4 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600 transition resize-none leading-relaxed"
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-2">

            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Priority
            </label>

            <div className="flex bg-[#09090b] p-1 rounded-lg border border-zinc-800/80">

              {["Low", "Medium", "High"].map(
                (item) => {

                  const isSelected =
                    priority === item;

                  const isHigh =
                    item === "High" && isSelected;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setPriority(item as Priority)
                      }
                      className={`flex-1 py-1.5 text-xs font-medium rounded-md transition ${
                        isSelected
                          ? isHigh
                            ? "bg-red-950/40 text-red-400 border border-red-900/50"
                            : "bg-zinc-800 text-white"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  );
                }
              )}

            </div>

          </div>
          <div className="space-y-2">

            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Status Column
            </label>

            <div className="relative">

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="w-full bg-[#09090b] border border-zinc-800/80 rounded-lg px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:border-zinc-600 cursor-pointer pr-10"
              >
                <option value="To Do">
                  To Do
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Done">
                  Done
                </option>
              </select>

              <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />

            </div>

          </div>

        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800/50">

          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="flex items-center gap-2 text-xs font-medium text-red-400 hover:text-red-300 transition disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4" />

            {deleting
              ? "Deleting..."
              : "Delete this task"}
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() =>
                navigate("/dashboard")
              }
              className="flex-1 sm:flex-none px-5 py-2 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 text-xs font-medium text-slate-950 bg-gradient-to-r from-purple-200 via-indigo-200 to-cyan-300 rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              <Save className="w-4 h-4" />

              {saving
                ? "Saving..."
                : "Save Changes"}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EditTask;