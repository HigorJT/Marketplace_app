import { useMutation } from '@tanstack/react-query'
import { RegisterHttpParams } from '../../interfaces/http/register'
import { register } from '../../services/auth.services'

export const useRegisterMutation = (p0: { onSuccess: () => Promise<void> }) => {
    const mutation = useMutation({
        mutationFn: (userData: RegisterHttpParams) => register(userData),
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error)
        },
    })

    return mutation
}