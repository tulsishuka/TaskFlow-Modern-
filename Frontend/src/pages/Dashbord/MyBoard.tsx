/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Calendar,
  Trash2,
  Pencil,
} from "lucide-react";

import AddTask from "./AddTask";

const API_URL = "https://taskflow-modern.onrender.com/api";

interface Task {
  _id: string;
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  columnId:
    | string
    | {
        _id: string;
        name: string;
      };
  createdAt: string;
}

interface Column {
  _id: string;
  name: string;
  position: number;
  tasks: Task[];
}

const MyBoard = () => {
    const navigate = useNavigate();

  const [columns, setColumns] = useState<Column[]>([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

const BOARD_ID = "6a808dba06dd2dfb1495ca8e";


  const fetchColumns = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/columns/board/${BOARD_ID}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch board"
        );
      }

      setColumns(data.columns);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to load board"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColumns();
  }, []);


  const handleDeleteTask = async (taskId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${API_URL}/tasks/${taskId}`,
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

      await fetchColumns();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete task"
      );
    }
  };

  const handleMoveTask = async (
    taskId: string,
    columnId: string
  ) => {
    try {
      const response = await fetch(
        `${API_URL}/tasks/${taskId}/move`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            columnId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to move task"
        );
      }

      await fetchColumns();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to move task"
      );
    }
  };

  const getFilteredTasks = (tasks: Task[]) => {
    return tasks.filter((task) => {
      const priorityMatch =
        filter === "All" ||
        task.priority === filter;

      const searchMatch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return priorityMatch && searchMatch;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c0c0e] text-white flex items-center justify-center">
        <p className="text-zinc-400">
          Loading board...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white p-6 sm:p-8 lg:p-10 font-sans">

      {error && (
        <div className="mb-6 flex items-center justify-between bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
          <span>{error}</span>

          <button
            onClick={fetchColumns}
            className="text-white underline"
          >
            Retry
          </button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

        <div>
          <h1 className="text-2xl font-bold">
            My Board
          </h1>
        </div>
     

        <div className="flex flex-wrap items-center gap-3">

          <div className="relative flex-1 sm:w-64">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search tasks..."
              className="w-full bg-[#141418] border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="bg-[#141418] border border-zinc-800 rounded-xl p-1 flex items-center gap-1">
            {["All", "High", "Medium", "Low"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
                    filter === item
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <button
            onClick={() =>
              setIsModalOpen(true)
            }
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-95 text-white text-sm font-semibold px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {columns.map((column) => {

          const tasks = getFilteredTasks(
            column.tasks || []
          );

          return (
            <div
              key={column._id}
              className="bg-[#000000] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col gap-4"
            >

              <div className="flex items-center justify-between pb-2 border-b border-zinc-800/60">

                <div className="flex items-center gap-2">

                  <span className="w-2 h-2 rounded-full bg-purple-500" />

                  <h3 className="font-semibold text-zinc-200">
                    {column.name}
                  </h3>

                </div>

                <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full font-medium">
                  {tasks.length}
                </span>

              </div>

           

              {tasks.length === 0 ? (
                <div className="text-center py-10 text-zinc-600 text-sm">
                  No tasks
                </div>
              ) : (
                tasks.map((task) => (

                  <div
                    key={task._id}
                    className="bg-[#17171c] border border-zinc-800 rounded-xl p-4 space-y-3 hover:border-zinc-700 transition-all"
                  >


<div className="flex items-center justify-between">

  <span
    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
      task.priority === "High"
        ? "bg-red-950/70 text-red-400 border border-red-800/40"
        : task.priority === "Medium"
        ? "bg-cyan-950/70 text-cyan-400 border border-cyan-800/40"
        : "bg-zinc-800 text-zinc-400 border border-zinc-700/60"
    }`}
  >
    {task.priority}
  </span>

  <div className="flex items-center gap-2">

    <button
      onClick={() =>
        navigate(`/dashboard/edit-task/${task._id}`)
      }
      className="text-zinc-500 hover:text-purple-400 transition"
      title="Edit task"
    >
      <Pencil size={16} />
    </button>

    <button
      onClick={() =>
        handleDeleteTask(task._id)
      }
      className="text-zinc-500 hover:text-red-400 transition"
      title="Delete task"
    >
      <Trash2 size={16} />
    </button>

  </div>

</div>

                    <div>

                      <h4 className="font-bold text-white text-base">
                        {task.title}
                      </h4>

                      {task.description && (
                        <p className="text-zinc-400 text-xs mt-1 leading-relaxed line-clamp-2">
                          {task.description}
                        </p>
                      )}

                    </div>

                    <div className="pt-2 border-t border-zinc-800/60">

                      <label className="text-[10px] text-zinc-500">
                        Move to
                      </label>

                      <select
                        value={column._id}
                        onChange={(e) =>
                          handleMoveTask(
                            task._id,
                            e.target.value
                          )
                        }
                        className="mt-1 w-full bg-[#111115] border border-zinc-800 rounded-lg px-2 py-2 text-xs text-zinc-300 focus:outline-none focus:border-purple-500"
                      >
                        {columns.map(
                          (targetColumn) => (
                            <option
                              key={targetColumn._id}
                              value={targetColumn._id}
                            >
                              {targetColumn.name}
                            </option>
                          )
                        )}
                      </select>

                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-xs text-zinc-500">

                      <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                        ME
                      </div>

                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <Calendar size={13} />

                        {new Date(
                          task.createdAt
                        ).toLocaleDateString()}
                      </span>

                    </div>

                  </div>

                ))
              )}

            </div>
             );
        })}

      </div>
      <AddTask
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        columns={columns}
        onTaskCreated={fetchColumns}
      />

    </div>
  );
};

export default MyBoard;