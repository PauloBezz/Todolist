import { createContext, useEffect, useState } from "react";

export const BottomSheetContext = createContext({})

export default function BottomSheetProvider({ children }) {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
    const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false)
    const [category, setCategory] = useState(null)

    return (
        <BottomSheetContext.Provider value={{ isBottomSheetOpen, setIsBottomSheetOpen, isCreateTaskOpen, setIsCreateTaskOpen, category, setCategory}}>
            {children}
        </BottomSheetContext.Provider>
    )
}