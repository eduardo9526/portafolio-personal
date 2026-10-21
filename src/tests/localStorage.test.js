import { describe, it, expect, beforeEach } from 'vitest';
import { getAuthSession, loginUser, logoutUser, savePost, getPosts } from '../utils/localStorage';

// Simulación de localStorage para el entorno de pruebas en Node.js
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
  writable: true
});

describe('Pruebas de Utilidades LocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('debe iniciar y obtener la sesión del usuario correctamente', () => {
    loginUser({ username: 'eduardo' });
    const user = getAuthSession();
    expect(user).toEqual({ username: 'eduardo' });
  });

  it('debe cerrar la sesión del usuario', () => {
    loginUser({ username: 'eduardo' });
    logoutUser();
    expect(getAuthSession()).toBeNull();
  });

  it('debe guardar una nueva publicación', () => {
    const post = { id: '1', titulo: 'Noticia Test', contenido: 'Contenido de prueba' };
    savePost(post);
    const posts = getPosts();
    expect(posts.length).toBe(1);
    expect(posts[0].titulo).toBe('Noticia Test');
  });
});