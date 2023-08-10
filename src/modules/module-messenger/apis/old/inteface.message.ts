interface doSendMessageProps {
    threadId: string;
    meId: string;
    partnerId: string;
    messageData: {
        mid: string;
        type: string;
        sid: string;
        createdTime: string;
        data: {
            text: string;
            files: string | object;
        };
    };
    isGroup?: boolean;
    isFirstMessage?: boolean;
}

interface doRemoveMessageProps {
    threadId: string;
    meId: string;
    messageId: string;
    partnerId: string;
    content: string;
    type: string;
    isGroup?: boolean;
}

interface doDeleteMessageProps {
    threadId: string;
    meId: string;
    messageId: string;
    partnerId: string;
    isGroup?: boolean;
    files?: Array<object>;
}

export type { doSendMessageProps, doRemoveMessageProps, doDeleteMessageProps };
