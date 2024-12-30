const { test, expect } = require("@playwright/test");
const axios = require("axios");

// URL de API de Pokémon
const BASE_URL = "https://pokeapi.co/api/v2";

test.describe("Pruebas con métodos HTTP en PokeAPI", () => {
  test("GET: Obtener datos de Pikachu", async () => {
    const response = await axios.get(`${BASE_URL}/pokemon/pikachu`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("pikachu");
  });

  test("POST: Crear un Pokémon ", async () => {
    const mockApiUrl = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.post(mockApiUrl, {
      name: "pikachu",
      type: "electric",
    });
    expect(response.status).toBe(201);
    expect(response.data.name).toBe("pikachu");
  });

  test("PUT: Actualizar un Pokémon ", async () => {
    const mockApiUrl = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await axios.put(mockApiUrl, {
      name: "raichu",
      type: "electric",
    });
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("raichu");
  });

  test("PATCH: Actualizar parcialmente un Pokémon ", async () => {
    const mockApiUrl = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await axios.patch(mockApiUrl, {
      name: "raichu",
    });
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("raichu");
  });

  test("DELETE: Eliminar un Pokémon ", async () => {
    const mockApiUrl = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await axios.delete(mockApiUrl);
    expect(response.status).toBe(200);
  });

  test("HEAD: Obtener solo encabezados de la API de Pokémon", async () => {
    const response = await axios.head(`${BASE_URL}/pokemon/pikachu`);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");
  });
});
