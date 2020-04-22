export async function fetchData(base_url: string, setData?: any) {
    const res = await fetch(`${base_url}`)
    const data = await res.json();
    return setData(data);
  }