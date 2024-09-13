export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML"></input>
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <label htmlFor="wd-points">Points </label>
      <input id="wd-points" value={100} />
      <br />
      <br />
      <label htmlFor="wd-group">Assignment Group </label>
      <select id="wd-group">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECT">PROJECT</option>
      </select>
      <br />
      <br />
      <label htmlFor="wd-display-grade-as">Display Grade as </label>
      <select id="wd-display-grade-as">
        <option selected value="PERCENTAGE">Percentage</option>
        <option value="RAW">Raw</option>
      </select>
      <br />
      <br />
      <label htmlFor="wd-submission-type">Submission Type </label>
      <select id="wd-submission-type">
        <option selected value="ONLINE">Online</option>
        <option value="IN-PERSON">In Person</option>
      </select>
      <br />
      <br />
      <label>Online Entry Options</label>
      <br />
      <input type="checkbox" name="check-online" id="wd-text-entry" />
      <label htmlFor="wd-text-entry">Text Entry</label>
      <br />
      <input type="checkbox" name="check-online" id="wd-website-url" />
      <label htmlFor="wd-website-url">Website URL</label>
      <br />
      <input type="checkbox" name="check-online" id="wd-media-recordings" />
      <label htmlFor="wd-media-recordings">Media Recordings</label>
      <br />
      <input type="checkbox" name="check-online" id="wd-student-annotation" />
      <label htmlFor="wd-student-annotation">Student Annotation</label>
      <br />
      <input type="checkbox" name="check-online" id="wd-file-upload" />
      <label htmlFor="wd-file-upload">File Uploads</label>
      <br />
      <br />
      <label htmlFor="wd-assign-to">Assign to </label>
      <input type="text" id="wd-assign-to" value="Everyone" title="Assign to" />
      <br />
      <label htmlFor="wd-due-date">Due</label>
      <br />
      <input type="date" id="wd-due-date" value="2024-05-13"></input>
      <br />
      <label htmlFor="wd-available-from">Available from</label>
      <br />
      <input type="date" id="wd-available-from" value="2024-05-06"></input>
      <br />
      <label htmlFor="wd-available-unti">Until</label>
      <br />
      <input type="date" id="wd-available-unti" value="2024-05-20"></input>
      <hr />
      <button id="wd-cancel-btn">Cancel</button>
      <button id="wd-save-btn">Save</button>
    </div>
  );
}
