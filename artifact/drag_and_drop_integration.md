# Drag‑and‑Drop Integration Guide

## 1️⃣ Install the library (already done)
```bash
npm install @hello-pangea/dnd
```

## 2️⃣ Add the `ServiceDnD` component
The component lives at:
```
components/pages/services/ServiceDnD.jsx
```
It is a **client‑side** component (`'use client'`).

## 3️⃣ Render the component on a page
You can embed it in any page that already uses client‑side rendering. For example, to show it on the **Home → Section 9** page:

### Edit `components/pages/home1/section9.js`
```tsx
// ---------- START OF FILE ----------
'use client'; // <-- make the page a client component
import ServiceDnD from '../services/ServiceDnD'; // <-- import the new component

export default function Section9() {
  // ... existing state and logic ...
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>

      {/* Insert the drag‑and‑drop UI */}
      <ServiceDnD />

      {/* You can keep the rest of the existing markup here */}
    </section>
  );
}
// ---------- END OF FILE ----------
```
> **Why `'use client'`?**
> `@hello-pangea/dnd` relies on the browser’s drag‑and‑drop APIs, which only work in client‑side rendered components.

## 4️⃣ (Optional) Style the component
If you don’t use Tailwind, add equivalent CSS to `public/css/admin.css`:
```css
.services-list, .main-bucket {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
}
.service-card {
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  border-radius: 0.375rem;
  cursor: grab;
}
.main-bucket {
  min-height: 120px;
  background: #f9fafb;
}
```

## 5️⃣ Test it
1. Run the dev server (`npm run dev`).
2. Open **http://localhost:3000/** and scroll to the *Section 9* area.
3. Drag any service card (e.g., *Personal Loan*) into the **Main Service** box.
4. The selected service appears inside the box.

## 6️⃣ Common pitfalls
| Symptom | Fix |
|---|---|
| Drag doesn't start | Ensure the page containing `<ServiceDnD />` has `'use client'` at the top. |
| “Cannot read property `addEventListener` of undefined” | Make sure the component is imported **only** in client‑side files; server‑side components cannot use the library. |
| Dropped item disappears | The `onDragEnd` handler must correctly set `mainService`. The code above already does this; double‑check you didn't modify it. |

---

**Next steps**
* If you want the selected main service to affect other parts of the UI (e.g., show it in the header), lift the state up via React Context or a simple prop callback.
* For persistence, call an API (`/api/main-service`) inside `onDragEnd` when a service is dropped.

---

Feel free to let me know which page you’d like the drag‑and‑drop UI on, and I can insert the import and JSX automatically.

