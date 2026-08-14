
import { useState } from "react";
import { X, AlertCircle, ChevronDown } from "lucide-react";

interface AddTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTask = ({ isOpen, onClose }: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [column, setColumn] = useState("To Do");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setError(true);
      return;
    }

    setError(false);

    console.log({
      title,
      description,
      priority,
      column,
    });

    // Close modal after successful creation
    onClose();

    // Reset form
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setColumn("To Do");
  };

  const handleClose = () => {
    onClose();

    // Reset form
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setColumn("To Do");
    setError(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      {/* Modal */}
      <div
        className="w-full max-w-md bg-[#111115] border border-zinc-800/90 rounded-2xl p-6 shadow-2xl text-white font-sans space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Create new task
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-zinc-800/60 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}
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
                  setError(false);
                }
              }}
              placeholder="e.g. Update user dashboard"
              className={`w-full bg-[#17171c] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                error
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-zinc-800 focus:border-purple-500"
              }`}
            />

            {error && (
              <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium pt-0.5">
                <AlertCircle size={14} />
                <span>Task title is required.</span>
              </p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-zinc-300">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details about this task..."
              className="w-full bg-[#17171c] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 resize-none transition-all"
            />
          </div>

          {/* Priority + Column */}
          <div className="grid grid-cols-2 gap-4">

            {/* Priority */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-300">
                Priority
              </label>

              <div className="bg-[#17171c] border border-zinc-800 rounded-xl p-1 flex items-center justify-between">
                {["Low", "Medium", "High"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setPriority(item)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      priority === item
                        ? "border border-cyan-500/80 bg-cyan-950/30 text-cyan-400 shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Column */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-300">
                Column
              </label>

              <div className="relative">
                <select
                  value={column}
                  onChange={(e) => setColumn(e.target.value)}
                  className="w-full appearance-none bg-[#17171c] border border-zinc-800 rounded-xl px-4 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-purple-500 transition-all cursor-pointer"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3">

            <button
              type="button"
              onClick={handleClose}
              className="text-zinc-400 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-95 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/10 transition-all"
            >
              Create Task
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;