import Link from "next/link";

// Sub-services and sub-sub-services as arranged in Admin > Menu Hierarchy
export default function SubServiceLinks({ items, depth = 0 }) {
  if (!items || items.length === 0) return null;

  return (
    <ul
      className="sub-service-links"
      style={{
        listStyle: "none",
        margin: depth ? "6px 0 0 6px" : "12px 0",
        padding: depth ? "0 0 0 12px" : 0,
        borderLeft: depth ? "2px solid #bae6fd" : "none",
      }}
    >
      {items.map((item) => (
        <li key={item.slug} style={{ margin: "6px 0" }}>
          <Link
            href={item.href}
            style={{
              color: "#0369a1",
              fontSize: depth ? "13.5px" : "14.5px",
              fontWeight: depth ? 500 : 600,
              textDecoration: "none",
            }}
          >
            {item.title} →
          </Link>
          <SubServiceLinks items={item.subServices} depth={depth + 1} />
        </li>
      ))}
    </ul>
  );
}
