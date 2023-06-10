import { ZodError } from 'zod'

export const hasZodIssue = (error: ZodError | null, path: string) => {
    return error?.issues.find((issue) => {
        return issue.path[0] === path
    })
        ? true
        : false
}
