import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePost, getAuthSession } from '../utils/localStorage';

export const CrearNoticia = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const navigate = useNavigate();
  const user = getAuthSession();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      titulo,
      contenido,
      autor: user?.username || 'Admin',
      fecha: new Date().toISOString().split('T')[0]
    };
    savePost(newPost);
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Crear Nueva Noticia / Post</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Título:</label>
          <input 
            type="text" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
            style={{ width: '100%', padding: '8px', marginTop: '4px' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Contenido:</label>
          <textarea 
            value={contenido} 
            onChange={(e) => setContenido(e.target.value)} 
            rows="6" 
            style={{ width: '100%', padding: '8px', marginTop: '4px' }} 
            required 
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Publicar Noticia
        </button>
      </form>
    </div>
  );
};