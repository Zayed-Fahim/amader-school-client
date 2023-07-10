export async function fetchTeacherAttendanceData() {
  try {
    const response = await fetch("/api/v1/teacher-attendance"); // Replace with your API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching teacher attendance data: ", error);
    throw error;
  }
}
