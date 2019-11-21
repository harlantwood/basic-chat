import React from 'react'
import style from './index.module.css'

export const ConversationList = ({
  conversations = [],
  user,
  messages,
  current,
  getConversations,
  joinConversation
}) => {

  let refresh

  if(user.id) {
    refresh = (
    <li onClick={getConversations}>
      <input id='refresh' type='image' alt='refresh' src={`refresh.svg`} />
    </li>)
  } else {
    refresh = <li></li>
  }

  return (<ul className={style.component}>
    {conversations.map(conversation => {
      const convoMessages = (messages[conversation.id] || [])
      const latestMessage = convoMessages.sort((a, b) => { return b.createdAt - a.createdAt })[0]
      return (
        <li
          key={conversation.id}
          disabled={conversation.id === current.id}
          onClick={e => joinConversation(conversation)}
        >
          <col->
            <p>{conversation.name.replace(user.id, '')}</p>
            <span>{latestMessage && latestMessage.text}</span>
          </col->
        </li>
      )
    })}
    {refresh}
  </ul>)
}
