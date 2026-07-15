import { getCollection } from 'astro:content';

export function slugifyTag(tag: string) {
    return tag
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

export async function getAllTags() {
    const publications = await getCollection('publications');
    const posts = (await getCollection('posts')).filter(post => !post.data.draft);

    const allEntries = [...publications, ...posts];
    const tags: Record<string, number> = {};

    allEntries.forEach(entry => {
        const entryTags = (entry.data as any).tags || [];
        entryTags.forEach((tag: string) => {
            const normalizedTag = tag.trim().toLowerCase();
            if (normalizedTag) {
                tags[normalizedTag] = (tags[normalizedTag] || 0) + 1;
            }
        });
    });

    return Object.entries(tags)
        .map(([name, count]) => ({ name, count, slug: slugifyTag(name) }))
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getContentByTag(tag: string) {
    const normalizedSearchTag = tag.toLowerCase();

    const publications = await getCollection('publications');
    const posts = (await getCollection('posts')).filter(post => !post.data.draft);

    const filterFn = (entry: any) => {
        const entryTags = (entry.data as any).tags || [];
        return entryTags.some((t: string) => t.toLowerCase() === normalizedSearchTag);
    };

    return [
        ...publications.filter(filterFn).map(e => ({ ...e, collection: 'publications' })),
        ...posts.filter(filterFn).map(e => ({ ...e, collection: 'posts' })),
    ].sort((a, b) => {
        const dateA = new Date((a.data as any).date || 0);
        const dateB = new Date((b.data as any).date || 0);
        return dateB.getTime() - dateA.getTime();
    });
}
