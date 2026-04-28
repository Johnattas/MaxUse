export async function openFolderBug (bug_id: string) {
        const path = 'sftp://root@192.168.3.33/home/engeapp/htdocs/engeapp.com.br/storage/app/private/bugs/' + bug_id;
        window.open(path, '_blank');
        return true;
}
