export type Event = {
    event: {
        id: number;
        first_date: string;
        last_date: string;
        description_text: string;
        title: string;
        photo_url: string;
        localist_url: string;
        location_name: string;
        updated_at: string;
        event_instances: EventInstace[];
    };
};

export type EventInstace = {
    event_instance: {
        start: string;
        end: string;
    };
};
