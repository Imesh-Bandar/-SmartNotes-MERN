import React from 'react';

const ConfirmationBox = ({ message = "Are you sure?", onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
            <div className="bg-base-100 rounded-xl shadow-xl p-8 w-full max-w-sm">
                <h2 className="text-lg font-semibold mb-4">{message}</h2>
                <div className="flex justify-end gap-3">
                    <button
                        className="btn btn-outline btn-sm"
                        onClick={onCancel}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={onConfirm}
                        type="button"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationBox;