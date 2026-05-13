Markdown
# 📍 Brazilian Zip Code Search (ViaCEP API)

*Read this in other languages: [🇧🇷 Português](README.pt-br.md)*

A fast, responsive, and intuitive address search system built with React and TypeScript. The application consumes the ViaCEP public API to return detailed location information based on user input, ensuring a seamless experience through real-time input formatting, data validation, and error handling.

> 🎓 **Note:** This project was developed as part of the practical studies of the **DevQuest** online programming course by **Dev em Dobro**.

---

## ✨ Features

- **Dynamic Search:** Asynchronous consumption of the [ViaCEP](https://viacep.com.br/) REST API.
- **Real-Time Input Mask:** Automatic formatting of the zip code input (e.g., `01001-000`) as the user types.
- **Data Validation:** Prevents empty form submissions, blocks letter/special character inputs, and validates the exact 8-digit length requirement.
- **Efficient Error Handling:** Immediate visual feedback for non-existent zip codes or network connection failures.
- **Loading State:** Disables the submit button and changes the visual state during data fetch, preventing multiple simultaneous requests.
- **Responsive Design:** Clean, user-friendly interface optimized for both mobile and desktop devices using the Utility-First approach of Tailwind CSS.

---

## 🛠️ Technologies Used

- **[React](https://reactjs.org/)** (UI creation & componentization)
- **[TypeScript](https://www.typescriptlang.org/)** (Static typing & code safety)
- **[Vite](https://vitejs.dev/)** (Build tool & lightning-fast dev server)
- **[Tailwind CSS](https://tailwindcss.com/)** (Agile & responsive styling)
- **[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)** (HTTP Requests)

---

## 🚀 How to Run the Project

**1. Clone the repository**
```bash
git clone [https://github.com/YOUR_USERNAME/cep-api-search.git](https://github.com/YOUR_USERNAME/cep-api-search.git)
```
2. Navigate to the project folder

```Bash
cd cep-api-search
```
3. Install dependencies

```Bash
npm install
```
4. Run the development server

```Bash
npm run dev
```
5. Acesse a aplicação

The server will launch locally. The terminal will show your local dev server (usually http://localhost:5173/). Acess through your browser.

📂 Main File Structure

The project architecture was designed to provide separation of responsibilities and easy maintenance:

```Plaintext
📦 src
 ┣ 📂 components
 ┃ ┗ 📜 CepSearch.tsx
      # Main component with lógic and UI
 ┣ 📜 App.tsx
      # Root component that renders the application
 ┣ 📜 globals.css 
      # Global condigs and Tailwind imports
 ┗ 📜 main.tsx
      # React's main entry point
```
📝 Next Steps (Future Improvements)
[ ] Add an interactive map (Google Maps API or Leaflet) to show the exact location pin.

[ ] Save recent search history in localStorage.

[ ] Implement a "Clear" button to quickly reset the search.

[ ] Dark Mode support.

Don't forget to replace YOUR_USERNAME in the git clone link with your actual GitHub username.

Replace [Your Name] and YOUR_LINKEDIN on the last line with your real credentials.