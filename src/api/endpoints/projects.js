const baseUrl = import.meta.env.VITE_API_URL;
const accessToken = localStorage.getItem("access_token");

export async function getJobs() {
  const url = `${baseUrl}/jobs/`;
  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

export async function createJob() {}
