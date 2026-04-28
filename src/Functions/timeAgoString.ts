import { useTimeAgo } from '@vueuse/core';

export function timeAgoString(date: any, options: any = {}) {
    const date_now = new Date();
    date = new Date(date).setHours(date_now.getHours(), date_now.getMinutes(), date_now.getSeconds());

    return useTimeAgo(date, {
        messages: options ?? options.file ?? timeAgoLimit,
        ...options,
    });
}
