const POSTS_KEY = 'blog_posts';
const AUTH_KEY = 'blog_auth_user';
const MESSAGES_KEY = 'mensajes_contacto';

// --- Gestión de Autenticación / Sesión ---
export const getAuthSession = () => {
  const user = localStorage.getItem(AUTH_KEY);
  console.log("🔑 [Auth] Verificando sesión activa:", user ? JSON.parse(user) : "Sin sesión");
  return user ? JSON.parse(user) : null;
};

export const loginUser = (userData) => {
  console.log("✅ [Auth] Usuario autenticado con éxito:", userData);
  localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
};

export const logoutUser = () => {
  console.log("🚪 [Auth] Sesión cerrada");
  localStorage.removeItem(AUTH_KEY);
};

// --- Gestión de Publicaciones / Noticias ---
export const getPosts = () => {
  const posts = localStorage.getItem(POSTS_KEY);
  const data = posts ? JSON.parse(posts) : [];
  console.log("📖 [Noticias] Publicaciones obtenidas:", data.length);
  return data;
};

export const savePost = (newPost) => {
  const posts = getPosts();
  const updatedPosts = [newPost, ...posts];
  localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
  console.log("➕ [Noticias] Nueva noticia guardada en localStorage:", newPost);
  return updatedPosts;
};

export const deletePost = (id) => {
  const posts = getPosts();
  const updatedPosts = posts.filter(post => post.id !== id);
  localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
  console.log("🗑️ [Noticias] Noticia eliminada ID:", id);
  return updatedPosts;
};

// --- Gestión de Mensajes de Contacto ---
export const obtenerMensajes = () => {
  const msgs = localStorage.getItem(MESSAGES_KEY);
  const data = msgs ? JSON.parse(msgs) : [];
  console.log("📬 [Contacto] Mensajes leídos:", data.length);
  return data;
};

export const guardarMensajes = (mensajes) => {
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(mensajes));
  console.log("💾 [Contacto] Lista de mensajes actualizada");
  return mensajes;
};

export const guardarMensaje = (nuevoMensaje) => {
  const mensajes = obtenerMensajes();
  const actualizados = [nuevoMensaje, ...mensajes];
  console.log("📩 [Contacto] Nuevo mensaje guardado:", nuevoMensaje);
  return guardarMensajes(actualizados);
};

// Alias de compatibilidad
export const obtenerNoticias = getPosts;
export const guardarNoticias = (noticias) => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(noticias));
  console.log("🔄 [Noticias] Lista de noticias actualizada");
  return noticias;
};