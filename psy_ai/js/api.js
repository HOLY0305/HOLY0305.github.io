// DeepSeek API 调用模块
const deepseekAPI = (function() {
    const config = window.config;
    
    class DeepSeekAPI {
        constructor() {
            this.messages = [];
            this.systemMessage = {
                role: 'system',
                content: config.SYSTEM_PROMPT
            };
        }

    // 打字机效果实现
    async typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        return new Promise(resolve => {
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    // 发送消息到DeepSeek API
    async sendMessage(userMessage) {
        try {
            // 添加用户消息到历史记录
            this.messages.push({
                role: 'user',
                content: userMessage
            });

            // 准备请求数据
            const requestData = {
                model: config.MODEL,
                messages: [this.systemMessage, ...this.messages]
            };

            console.log('发送API请求:', {
                endpoint: config.API_ENDPOINT,
                model: config.MODEL,
                messageCount: requestData.messages.length
            });

            // 发送请求
            const response = await fetch(config.API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.API_KEY}`,
                    'Accept': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                console.error('API响应状态:', response.status);
                let errorText = '';
                try {
                    const errorData = await response.json();
                    errorText = JSON.stringify(errorData);
                } catch (e) {
                    errorText = await response.text();
                }
                console.error('API错误详情:', errorText);
                throw new Error(`API请求失败: ${response.status} - ${errorText}`);
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;

            // 添加AI回复到历史记录
            this.messages.push({
                role: 'assistant',
                content: aiResponse
            });

            return aiResponse;

        } catch (error) {
            console.error('API调用错误:', error);
            let errorMessage = '抱歉，我现在遇到了一些技术问题。';
            
            if (error.message.includes('Failed to fetch')) {
                errorMessage += '\n网络连接失败，请检查您的网络连接。';
            } else if (error.message.includes('API请求失败')) {
                errorMessage += '\n' + error.message;
            } else if (error.message.includes('timeout')) {
                errorMessage += '\n请求超时，请稍后重试。';
            }
            
            return errorMessage;
        }
    }

    // 清空聊天历史
    clearHistory() {
        this.messages = [];
    }
}

    return new DeepSeekAPI();
})();