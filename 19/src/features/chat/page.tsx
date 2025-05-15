import { Route, Routes } from "react-router-dom"
import { ChatGround } from "./components/ChatGround"
import { ChatList } from "./components/chatList"
import Layout from "@/layouts/common"

export const Chat = () => {
    return <Layout>
        <Layout.Header>
            <ChatList />
        </Layout.Header>
        <Layout.Body>
            <Routes>
                <Route path="/:id" element={<ChatGround />} />
                <Route path="/" element={<h1 className="text-zinc-200"> chat now</h1>} />
            </Routes>
        </Layout.Body>
    </Layout>
}