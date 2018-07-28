export class Answer {
    responses: object;
    surveyId: number;
    contactId: number;

    constructor(responses: object, surveyId: number, contactId: number) {
        this.responses = responses;
        this.surveyId = surveyId;
        this.contactId = contactId;
    }
}
