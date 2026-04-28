export function closeFile (file_or_route: any) {
    const system: any = useUserSystemStore();
    system.view_file.closeFile();
}

