interface ConversationHeaderProps {
    setShowInfo(value: boolean): void;
    showInfo: boolean;
    threadIdSelected: string;
}
interface Message {
    mid: string;
    type: string;
    sid: string;
    createdTime: string;
    data: {
        text: string;
        files: any;
    };
}

interface MessageListProps {
    meId: string;
    threadIdSelected: string;
    messageIds: Array<string>;
    messages: object;
    messagePostHeight: number;
    filesLocal: Array<File>;
    onClickMessageList(): void;
    doGetMessageSuccess(data: object): void;
}

interface MessageProps {
    meId: string;
    messageId: string;
    messageData: Message;
    isMargin: boolean;
}

export type { ConversationHeaderProps, MessageListProps, MessageProps, Message };
