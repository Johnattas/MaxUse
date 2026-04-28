export function getProfileFile (files_list: any, type_img = 'icon') {
    const disk = type_img === 'icon' ? 'whatsapp_profiles_icons' : 'whatsapp_profiles';
    if (files_list){
        for (let i = files_list.length - 1; i >= 0; i--) {
            if (files_list[i]?.disk === disk){
                return files_list[i]?.id;
            }
        }
        return false;
    }
}
