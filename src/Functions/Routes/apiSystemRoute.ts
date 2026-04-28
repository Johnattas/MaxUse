import { useRoute } from 'ziggy-js';


export default function (RouteName: string | null, data: any | null = null, options: any = null, method = 'GET') {
    if (!RouteName) {
        return null;
    }

    const system: any = useUserSystemStore();

    const option_load_screen = options?.load_screen ?? null;

    const option_console_log = options?.console_log ?? options?.log ?? null;
    const options_console_trace = options?.console_trace ?? options?.trace ?? system.trace_logs ?? null;

    const route = useRoute();
    const routeURL: string = method === 'GET' ? route(RouteName, data) : route(RouteName);

    // Criando o objeto para retornar
    const apiHelper = {
        option_load_screen,
        option_console_log,
        options_console_trace,
        system,
        routeURL,
    };

    if (options_console_trace || system.trace_logs) {
        console.trace('========>> Trace ' + method + ' URL: ' + routeURL, data);
    } else if (option_console_log) {
    }

    return apiHelper;
}
