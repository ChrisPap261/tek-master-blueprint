<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep original brief content in a browser-safe content module and render it through shared presentational sections; this preserves copy across the five WordPress-reproducible pages.
- Use a shared site shell and distinct TanStack content routes; this keeps navigation, footer, and page metadata consistent.
- The contact form is a non-sending mockup, not a production lead form; never simulate successful delivery or collect submissions until a live service is requested.
