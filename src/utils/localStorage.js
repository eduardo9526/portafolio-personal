const POSTS_KEY = 'blog_posts';
const AUTH_KEY = 'blog_auth_user';
const MESSAGES_KEY = 'mensajes_contacto';

// --- Gestión de Autenticación / Sesión ---
export const getAuthSession = () => {
  const user = localStorage.getItem(AUTH_KEY);
  return user ? JSON.parse(user) : null;
};

export const loginUser = (userData) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
};

export const logoutUser = () => {
  localStorage.removeItem(AUTH_KEY);
};

// --- Gestión de Publicaciones / Noticias ---
export const getPosts = () => {
  const posts = localStorage.getItem(POSTS_KEY);
  return posts ? JSON.parse(posts) : [];
};

export const savePost = (newPost) => {
  const posts = getPosts();
  const updatedPosts = [newPost, ...posts];
  localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
  return updatedPosts;
};

export const deletePost = (id) => {
  const posts = getPosts();
  const updatedPosts = posts.filter(post => post.id !== id);
  localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
  return updatedPosts;
};

// --- Gestión de Mensajes de Contacto ---
export const obtenerMensajes = () => {
  const msgs = localStorage.getItem(MESSAGES_KEY);
  return msgs ? JSON.parse(msgs) : [];
};

export const guardarMensajes = (mensajes) => {
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(mensajes));
  return mensajes;
};

export const guardarMensaje = (nuevoMensaje) => {
  const mensajes = obtenerMensajes();
  const actualizados = [nuevoMensaje, ...mensajes];
  return guardarMensajes(actualizados);
};

// --- Alias de compatibilidad para componentes y pruebas ---
export const obtenerNoticias = getPosts;

export const guardarNoticias = (noticias) => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(noticias));
  return noticias;
};