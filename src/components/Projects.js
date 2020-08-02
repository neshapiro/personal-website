import React, { useState, useEffect } from "react"
import classnames from "classnames"

import PROJECTS from "../constants/projects"

function Projects() {
  console.log("render")
  const [current, setCurrent] = useState(0)
  const [isRotating, setRotating] = useState(true)
  let timeout

  useEffect(() => {
    const next = (current + 1) % PROJECTS.length
    timeout = setTimeout(() => isRotating && setCurrent(next), 3000)

    return () => clearTimeout(timeout)
  }, [current])

  const determineTarget = target => {
    if (target === -1) return PROJECTS.length - 1

    return target % PROJECTS.length
  }

  return (
    <div className="Projects">
      <h1>Projects</h1>
      {PROJECTS.map((project, idx) => {
        return (
          <div
            className={classnames(
              "Project",
              current === idx && "Project--current"
            )}
          >
            <img
              alt={project.name}
              src={project.imageUrl}
              className="Project-image"
            />
            <div className="Project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        )
      })}
      <div className="Pagination">
        <button onClick={() => setCurrent(determineTarget(current - 1))}>
          {"<"}
        </button>
        {PROJECTS.map((p, idx) => {
          return (
            <button
              className="Pagination-page"
              onClick={() => setCurrent(idx)}
            />
          )
        })}
        <button onClick={() => setCurrent(determineTarget(current + 1))}>
          {">"}
        </button>
        <button
          className="Pagination-toggle"
          onClick={() => {
            setRotating(!isRotating)
            if (isRotating) clearTimeout(timeout)
            else setCurrent(determineTarget(current + 1))
          }}
        >
          {isRotating ? "STOP" : "PLAY"}
        </button>
      </div>
    </div>
  )
}

export default Projects
