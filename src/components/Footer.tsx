export function Footer() {
  return (
    <footer className="py-12 border-t bg-card" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="text-xl font-bold text-gradient-pride mb-3">TransPride</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Promoting equality, dignity, and inclusion for transgender individuals.
              Together, we can build a world where everyone is free to be themselves.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {["About", "Challenges", "Stories", "Resources", "Rights", "Be an Ally", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-").replace("be-an-", "")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3">Support Organizations</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://nazindia.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pride-blue transition-colors">Naz Foundation India</a></li>
              <li><a href="https://humsafar.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pride-blue transition-colors">Humsafar Trust</a></li>
              <li><a href="https://icallhelpline.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pride-blue transition-colors">iCall (TISS)</a></li>
            </ul>
          </div>
        </div>

        {/* Trans flag stripe */}
        <div className="flex h-1.5 rounded-full overflow-hidden mb-8">
          <div className="flex-1 bg-pride-blue" />
          <div className="flex-1 bg-pride-pink" />
          <div className="flex-1 bg-pride-white" />
          <div className="flex-1 bg-pride-pink" />
          <div className="flex-1 bg-pride-blue" />
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Made with 💜 for equality and inclusion. Everyone deserves to be seen, heard, and respected.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} TransPride Awareness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
