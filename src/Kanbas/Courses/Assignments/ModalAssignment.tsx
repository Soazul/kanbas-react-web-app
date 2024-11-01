export default function ModalAssignment({assignmentId, deleteAssignment} : {assignmentId: string; deleteAssignment: (assignmentId: string) => void;}) {
    return (
        <div id="wd-remove-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Confirm Deletion</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <p>Do you want to remove this assignment? This action cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button onClick={() => deleteAssignment(assignmentId)} type="button" data-bs-dismiss="modal" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
