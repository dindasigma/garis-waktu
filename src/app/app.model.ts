export const eventAttributesMapping = {
    when: 'When',
    where: 'Where',
    what: 'What',
    which: 'Which',
    url: 'URL',
    details: 'Details',
};

export interface Event {
    when: string;
    where: string;
    what: string;
    which: string;
    url: string;
    details: string;
}