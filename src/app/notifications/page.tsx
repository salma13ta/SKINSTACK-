
"use client"

import React, { useEffect, useState } from "react"
import styles from "./notification.module.css"

type Notification = {
  id: number
  type: string
  title: string

  body: string
  time: string
  unread: boolean
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "Recommendation",
    title: "New Product Match Found",
    body: "Based on your skin profile, we found 3 new serums perfect for combination skin.",
    time: "Just now",
    unread: true,
  },
  {
    id: 2,
    type: "Routine",
    title: "Morning Routine Reminder",
    body: "Don't forget to complete your Morning Glow Routine today!",
    time: "Just now",
    unread: true,
  },
  {
    id: 3,
    type: "Achievement",
    title: "7-Day Streak Unlocked!",
    body: "Congratulations! You've maintained your skincare routine for 7 consecutive days.",
    time: "7h ago",
    unread: false,
  },
  {
    id: 4,
    type: "Tip",
    title: "Dermatologist Tip of the Day",
    body: "Always apply sunscreen as the last step of your morning routine, even on cloudy days.",
    time: "19h ago",
    unread: false,
  },
]

export default function Notificationspage() {
  const [notifications, setNotifications] = useState<Notification[]>(
    initialNotifications,
  )

  const unreadCount = notifications.filter((n) => n.unread).length

  useEffect(() => {
    // When user opens the notifications screen, clear the unread badges
    if (unreadCount > 0) {
      setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
    }
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const markAllAsRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))

  const markAllAsUnread = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: true })))

  const toggleRead = (id: number) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n)),
    )

  const [selected, setSelected] = useState<Notification | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const openNotification = (n: Notification) => {
    setSelected(n)
    // mark it read when opened
    setNotifications((prev) => prev.map(p => p.id === n.id ? { ...p, unread: false } : p))
  }

  const closePanel = () => setSelected(null)

  const filteredNotifications = notifications.filter(n => {
    if (activeFilter === "all") return true
    if (activeFilter === "unread") return n.unread
    if (activeFilter === "recommendation") return n.type === "Recommendation"
    if (activeFilter === "routine") return n.type === "Routine"
    if (activeFilter === "tips") return n.type === "Tip"
    return true
  })

  useEffect(() => {
    // debug: track selected changes
    // eslint-disable-next-line no-console
    console.log('selected changed', selected)
  }, [selected])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Notifications</h1>
          <p className={styles.subtitle}>You have {unreadCount} unread notifications</p>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.markAllBtn} onClick={markAllAsRead}>
            Mark all as read
          </button>
        </div>
      </header>

      <div className={styles.filters}>
        <button
          className={`${styles.chip} ${activeFilter === "all" ? styles.active : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          className={`${styles.chip} ${activeFilter === "unread" ? styles.active : ""}`}
          onClick={() => setActiveFilter("unread")}
        >
          Unread <span className={styles.chipCount}>{notifications.filter(n => n.unread).length}</span>
        </button>
        <button
          className={`${styles.chip} ${activeFilter === "recommendation" ? styles.active : ""}`}
          onClick={() => setActiveFilter("recommendation")}
        >
          Recommendations
        </button>
        <button
          className={`${styles.chip} ${activeFilter === "routine" ? styles.active : ""}`}
          onClick={() => setActiveFilter("routine")}
        >
          Routines
        </button>
        <button
          className={`${styles.chip} ${activeFilter === "tips" ? styles.active : ""}`}
          onClick={() => setActiveFilter("tips")}
        >
          Tips
        </button>
      </div>

      <main className={styles.list}>
        {filteredNotifications.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>✓</div>
            <h3 className={styles.emptyTitle}>You're all caught up!</h3>
            <p className={styles.emptyText}>No {activeFilter === "all" ? "notifications" : activeFilter} at the moment.</p>
          </div>
        ) : (
          filteredNotifications.map((n) => (
            <article
              key={n.id}
              className={`${styles.card} ${n.unread ? styles.unread : ""}`}
              onClick={() => openNotification(n)}
            >
              <div className={styles.icon} aria-hidden>
                {n.type === "Recommendation" && <span className={styles.emoji}>✨</span>}
                {n.type === "Routine" && <span className={styles.emoji}>🌞</span>}
                {n.type === "Achievement" && <span className={styles.emoji}>🏆</span>}
                {n.type === "Tip" && <span className={styles.emoji}>💡</span>}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.type}>{n.type}</span>
                  <span className={styles.time}>{n.time}</span>
                </div>
                <h3 className={styles.cardTitle}>{n.title}</h3>
                <p className={styles.cardText}>{n.body}</p>
                <div className={styles.cardFooter}>
                  <a className={styles.actionLink}>View Products</a>
                  <button className={styles.smallBtn} onClick={(e) => { e.stopPropagation(); toggleRead(n.id); }}>
                    {n.unread ? "Mark as read" : "Mark as unread"}
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </main>

      <footer className={styles.footerActions}>
        <button onClick={markAllAsUnread} className={styles.ghostBtn}>Mark all as unread</button>
      </footer>
      {selected && (
        <div className={styles.panelOverlay} onClick={closePanel}>
          <aside className={styles.detailPanel} onClick={(e) => e.stopPropagation()}>
            <div className={styles.detailHeader}>
              <h2>{selected.title}</h2>
              <button className={styles.closeBtn} onClick={closePanel} aria-label="Close">✕</button>
            </div>
            <div className={styles.detailBody}>
              <div className={styles.detailMeta}>
                <span className={styles.type}>{selected.type}</span>
                <span className={styles.time}>{selected.time}</span>
              </div>
              <p>{selected.body}</p>
              <div style={{ marginTop: 20 }}>
                <button className={styles.markAllBtn} onClick={() => { toggleRead(selected.id); }}>
                  {selected.unread ? 'Mark as read' : 'Mark as unread'}
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
