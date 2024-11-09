
document.getElementById("resumeForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const profileImageInput = document.getElementById("profileImage").files[0];

  let imageUrl = null;

  if (profileImageInput) {
    imageUrl = await uploadImage(profileImageInput);
  }

  const url = `preview.html?name=${encodeURIComponent(name)}&education=${encodeURIComponent(education)}&experience=${encodeURIComponent(experience)}&imageUrl=${encodeURIComponent(imageUrl)}`;
  window.location.href = url;
});

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  // Upload to Imgur or another service (replace 'YOUR_CLIENT_ID')
  const response = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: "Client-ID YOUR_CLIENT_ID", // Replace with actual Client-ID
    },
    body: formData,
  });

  const result = await response.json();
  return result.data.link; // Imgur returns a public URL to the image
}
// -------------Preview------------------


const queryParams = new URLSearchParams(window.location.search);
  
const name = queryParams.get("name");
const education = queryParams.get("education");
const experience = queryParams.get("experience");
const imageUrl = queryParams.get("imageUrl");

if (name) {
  document.getElementById("previewName").textContent = decodeURIComponent(name);
  document.getElementById("previewEducation").textContent = decodeURIComponent(education);
  document.getElementById("previewExperience").textContent = decodeURIComponent(experience);

  if (imageUrl) {
    document.getElementById("previewImage").src = decodeURIComponent(imageUrl);
    document.getElementById("previewImageContainer").style.display = "block";
  }
} else {
  alert("No data found in URL.");
}
