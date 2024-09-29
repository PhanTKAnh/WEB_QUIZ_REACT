const API_DOMAIN = "https://database-quiz-pi.vercel.app/";

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text(); // Lấy văn bản từ phản hồi
    throw new Error(`Error ${response.status}: ${errorText}`);
  }
  return await response.json(); // Chỉ phân tích cú pháp khi phản hồi là hợp lệ
}

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  return handleResponse(response); // Sử dụng hàm xử lý phản hồi
}

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return handleResponse(response); // Sử dụng hàm xử lý phản hồi
}

export const del = async (path, id) => {
  const response = await fetch(API_DOMAIN + path + '/' + id, { // Thêm ID vào path nếu cần
    method: "DELETE",
  });
  return handleResponse(response); // Sử dụng hàm xử lý phản hồi
}

export const patch = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return handleResponse(response); // Sử dụng hàm xử lý phản hồi
}
