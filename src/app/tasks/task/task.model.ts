interface Actor {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}

interface Repo {
    id: number;
    url: string;
    name: string;
}

interface Comment {
    author_association: string;
    body: string;
    created_at: string;
    html_url: string;
    id: string;
    issue_url: string;
    node_id: string;
    performed_via_github_app: string;
    reactions: string;
    updated_at: string;
    // "2024-11-19T02:52:08Z": string;
    url: string;
    user: string;
}

interface Payload {
    action: string;
    comment: Comment | null;
}

export interface TaskInterface {
    id: string;
    type: string;
    actor: Actor;
    repo: Repo;
    payload: Payload;
    public: Boolean;
    created_at: string;
}