export const eventAttributesMapping = {
    when: 'When',
    where: 'Where',
    what: 'What',
    which: 'Which',
    url: 'URL',
    details: 'Details',
    is_photo: 'IsPhoto',
    photo_credit: 'PhotoCredit',
    id: 'Id',
};

export interface Event {
    when: string;
    where: string;
    what: string;
    which: string;
    url: string;
    details: string;
    is_photo: string;
    photo_credit: string;
    id: number;
}