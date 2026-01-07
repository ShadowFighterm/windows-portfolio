import { Trash2, FolderX } from 'lucide-react';

export default function RecycleBin() {
  const items = [
    { name: 'Failed_Project_Attempt_v1.zip', date: '2023-01-15', size: '245 MB' },
    { name: 'Old_Portfolio_Design.psd', date: '2023-03-22', size: '128 MB' },
    { name: 'Deprecated_Code_Archive.tar.gz', date: '2023-06-10', size: '512 MB' },
    { name: 'Unused_Components', date: '2023-09-05', size: '64 MB' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#ECE9D8] border-b border-gray-400 px-4 py-2 flex items-center gap-4">
        <button className="px-3 py-1 hover:bg-gray-200 rounded">Empty Recycle Bin</button>
        <button className="px-3 py-1 hover:bg-gray-200 rounded">Restore All</button>
      </div>

      <div className="flex-1 p-6">
        {items.length > 0 ? (
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer"
              >
                <FolderX className="w-10 h-10 text-gray-400" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    Deleted: {item.date} • Size: {item.size}
                  </p>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Restore
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <Trash2 className="w-24 h-24 mb-4" />
            <p className="text-xl">Recycle Bin is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
