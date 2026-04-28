export function openFile (file_or_route: any) {
    const system: any = useUserSystemStore();
    system.view_file.openFile(file_or_route);
}

