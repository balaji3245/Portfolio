import { usePortfolioContent } from "../context/PortfolioContent.jsx";

export default function Footer() {
  const {
    content: { profile },
  } = usePortfolioContent();

  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell text-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} {profile.name}.</p>
      </div>
    </footer>
  );
}
