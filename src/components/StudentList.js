import React, { useEffect, useState } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    name: "",
    roll: "",
    department: "",
    image: "",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(stored);
  }, []);

  const handleDelete = (index) => {
    const filtered = students.filter((_, i) => i !== index);
    setStudents(filtered);
    localStorage.setItem("students", JSON.stringify(filtered));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedStudent(students[index]);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length) {
      setEditedStudent({ ...editedStudent, image: URL.createObjectURL(files[0]) });
    } else {
      setEditedStudent({ ...editedStudent, [name]: value });
    }
  };

  const handleUpdate = () => {
    const updated = [...students];
    updated[editIndex] = editedStudent;
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
    setEditIndex(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Registered Students</h2>
      {students.length === 0 ? (
        <p className="text-center">No students registered yet.</p>
      ) : (
        students.map((student, index) => (
          <div key={index} className="border p-4 mb-4 rounded shadow flex items-center gap-4">
            <img
              src={student.image}
              alt="Student"
              className="w-20 h-20 object-cover rounded-full"
            />
            {editIndex === index ? (
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  value={editedStudent.name}
                  onChange={handleChange}
                  className="border px-2 py-1 mb-2 w-full"
                />
                <input
                  type="text"
                  name="roll"
                  value={editedStudent.roll}
                  onChange={handleChange}
                  className="border px-2 py-1 mb-2 w-full"
                />
                <input
                  type="text"
                  name="department"
                  value={editedStudent.department}
                  onChange={handleChange}
                  className="border px-2 py-1 mb-2 w-full"
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="mb-2"
                />
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 text-white px-3 py-1 mr-2 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex-1">
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Roll:</strong> {student.roll}</p>
                <p><strong>Department:</strong> {student.department}</p>
              </div>
            )}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentList;
