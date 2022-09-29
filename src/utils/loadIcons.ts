export default async (iconNames: string[]) => {
    return Object.fromEntries(
        await Promise.all(
            iconNames.map(async (iconName) => [iconName, (await import(`../assets/icons/${iconName}.svg?raw`)).default])
        )
    );
}
