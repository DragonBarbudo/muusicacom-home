// Blog categories configuration
export const blogCategories = [
  { name: "Todos", slug: "all", color: "#14B8A6" },
  { name: "Guías Legales", slug: "guias-legales", color: "#14B8A6" },
  { name: "Tips de Negocio", slug: "tips-negocio", color: "#3B82F6" },
  { name: "Música y Psicología", slug: "musica-psicologia", color: "#8B5CF6" },
  { name: "Casos de Éxito", slug: "casos-exito", color: "#F59E0B" },
  { name: "Industria Musical", slug: "industria", color: "#EC4899" },
];

// Helper functions for content collections
// These are now async since they work with Astro content collections

import { getCollection } from 'astro:content';

export async function getAllPosts() {
  const posts = await getCollection('blog');
  // Sort by date (newest first)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getRecentPosts(count = 3) {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter(post => post.data.featured);
}

export async function getRegularPosts() {
  const posts = await getAllPosts();
  return posts.filter(post => !post.data.featured);
}

export async function getPostsByCategory(categorySlug) {
  const posts = await getAllPosts();
  if (categorySlug === 'all') return posts;
  
  const category = blogCategories.find(c => c.slug === categorySlug);
  if (!category) return [];
  
  return posts.filter(post => post.data.category === category.name);
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}
