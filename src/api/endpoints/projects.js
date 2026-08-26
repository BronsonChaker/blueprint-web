const accessToken = localStorage.getItem("access_token");
const baseUrl = import.meta.env.VITE_API_URL;

export async function viewProject(id) {
  const url = `${baseUrl}/jobs/${id}`;

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getProjectTasks(id) {
  const url = `${baseUrl}/jobs/${id}/tasks`;

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
