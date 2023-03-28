export default async (iconNames: string[]) => {
    return Object.fromEntries(
        await Promise.all(
            iconNames.map(async (iconName) => {
                let icon: any;

                try {
                    icon = (await import(`../assets/icons/${iconName}.svg?raw`)).default;
                }
                catch (error) {
                    icon = (await import(`../../public/media/${iconName}.svg?raw`)).default;
                }

                return [iconName, icon];
            })
        )
    );
}
