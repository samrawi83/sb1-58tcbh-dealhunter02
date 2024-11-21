'use client'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function Comments({ postId }) {
  const { user } = useAuth()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!comment.trim()) return

    const newComment = {
      id: Date.now(),
      text: comment,
      user: user?.name || 'Anonymous',
      date: new Date().toISOString(),
    }

    setComments([newComment, ...comments])
    setComment('')
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      
      {user && (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full px-4 py-2 rounded-lg border min-h-[100px]"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.user}</span>
              <span className="text-sm text-gray-600">
                {new Date(comment.date).toLocaleDateString()}
              </span>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 