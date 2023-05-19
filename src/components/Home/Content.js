import React from 'react'

function Content() {
    return (
        <div>
            <div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-left text-sm font-light">
                                    <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">#</th>
                                            <th scope="col" class="px-6 py-4">Tiêu đề</th>
                                            <th scope="col" class="px-6 py-4">Tác giả</th>
                                            <th scope="col" class="px-6 py-4">Thể loại</th>
                                            <th scope="col" class="px-6 py-4">Ngày phát hành</th>
                                            <th scope="col" class="px-6 py-4">Số trang</th>
                                            <th scope="col" class="px-6 py-4 hidden">Action</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                            <td class="whitespace-nowrap px-6 py-4"> Sách Tiếng Việt Lớp 1</td>
                                            <td class="whitespace-nowrap px-6 py-4">Nguyễn Hoàng Anh </td>
                                            <td class="whitespace-nowrap px-6 py-4">Giáo dục</td>
                                            <td class="whitespace-nowrap px-6 py-4">1/1/2222</td>
                                            <td class="whitespace-nowrap px-6 py-4">500</td>
                                            <td class="whitespace-nowrap px-6 py-4 hidden">
                                             <button className='px-3 py-2 bg-green-600 mr-2'>View</button>
                                            <button className='px-3 py-2 bg-green-600'>edit</button>
                                            </td>
                                            
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content