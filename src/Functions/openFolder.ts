export async function openFolder(folder: string, disk: string | null = null) {
    const nav: any = navigator;
    if (nav.userAgentData) {
        const os = nav.userAgentData.platform;
        let base_folder: string = disk === 'projects_old' ? 'localexplorer:C:/_clientes/' : 'localexplorer:C:/_clientes_new/';
        ('');
        if (os === 'Linux') {
            base_folder = disk === 'projects_old' ? 'sftp://root@192.168.3.33/home/engeapp/htdocs/engeapp.com.br/storage/app/private/projects/clientes/' : 'sftp://root@192.168.3.33/home/engeapp/htdocs/engeapp.com.br/storage/app/private/projects/';
        }

        const path = base_folder + folder.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        window.open(path, '_blank');
        return true;
    }

    return false;
}
